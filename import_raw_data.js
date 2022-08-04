const fs = require('fs');
const path = require('path');
var im = require('imagemagick');

(async () => {
    const generated = 'generated';
    const targetDir = `src/${generated}`;

    function thumbnail(inputFile, outputThumbnail) {
        return new Promise((resolve, reject) => {
            im.convert([inputFile, '-resize', `495x495`, outputThumbnail],
                (err, stdout) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(stdout);
                });
        })
    }

    async function handleImage(inputDir, outputDir, imageName) {
        const inputFile = path.join(inputDir, `${imageName}.png`);
        const outputFile = path.join(outputDir, `${imageName}.png`);
        const outputThumbnail = path.join(outputDir, `${imageName}_t.png`);

        if (fs.existsSync(inputFile)) {
            console.log(`handling ${inputFile}`)
            await fs.promises.copyFile(inputFile, outputFile);
            await thumbnail(inputFile, outputThumbnail);
        }
    }

    async function read_input_type(input_type) {
        const inputDir = `raw_${input_type}`;
        const outputDir = `${generated}/${input_type}`
        await fs.promises.mkdir(outputDir, {recursive: true});

        const complete = []
        const files = await fs.promises.readdir(inputDir, {withFileTypes: true});
        for (const file of files) {
            if (file.isFile() && file.name.endsWith('.json')) {
                const fromPath = path.join(inputDir, file.name);
                const content = await fs.promises.readFile(fromPath);
                complete.push(JSON.parse(content))
            }
        }
        await fs.promises.writeFile(`${outputDir}/db.json`, JSON.stringify(complete));

        for (let i = 0; i < complete.length; i++) {
            const nft = complete[i];
            await handleImage(inputDir, outputDir, nft['name']);
        }
        await handleImage(inputDir, outputDir, 'null');
    }

    await read_input_type("player_glove");
    await read_input_type("animal_arcade");

    console.log()
    await fs.promises.rm(targetDir, {force: true, recursive: true});
    await fs.promises.rename(generated, targetDir)
})();

