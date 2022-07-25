---
title: "Player Gloves"
layout: single
header:
    overlay_color: "#000"
    overlay_filter: "0.5"
    overlay_image: https://static.gstop-content.com/f2e3cd88-0838-4a76-99d4-2202c4ebbc37?img-width=expanded&img-format=WebP
    tagline: Don’t enter the metaverse without your trusty Player Glove.
---

# Player Gloves Explorer
<div id="container">
    <form style="background-color: #e9dcbe">
        <div class="form-group row">
            <label for="gloveId" class="col-sm-2 col-form-label">Glove ID</label>
            <div class="col-sm-10">
                <input id="gloveId" class="form-control" type="text" />
            </div>
        </div>
        <button type="button" class="btn btn--primary" id="search">See Player Glove</button>
        <button type="button" class="btn btn--primary" id="randomize">Random</button>
    </form>
    <a id="marketplacelink">
        <img id="nftImage" class="nftImage">
        <p id="marketplaceurl"></p>
    </a>
    <h2>Traits of this Glove</h2>
    <table id="glove_traits">
      <thead>
        <tr>
          <th scope="col">Trait Name</th>
          <th scope="col">Trait Value</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
</div>

<script src="script.js"></script>

