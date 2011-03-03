# toModal

toModal is a simply, cross-browser and easy in configuration jQuery plugin which generate modal popups

## How to start

Check this example:

script.js

    $("#popup").toModal();

style.css

    #popup {
      background: #eee;
      border: 4px solid #ccc;
      padding: 1em;
      width: 400px;
    }

index.html

    <!DOCTYPE html>
    <head>
      <meta charset="utf-8">
      <title>toModal</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <div id="content">
        <p>To trail the genealogies of these high mortal miseries, carries us at last among the sourceless primogenitures of the gods; so that, in the face of all the glad, hay-making suns, and soft cymballing, round harvest-moons, we must needs give in to this: that the gods themselves are not for ever glad. The ineffaceable, sad birth-mark in the brow of man, is but the stamp of sorrow in the signers.</p>
        <p><a href="#" class="toModalOpen">Open popup!</a></p>
      </div>

      <div id="popup">
        <p>"She can't be far off now," returned his companion. "How long will she stop at Suez?" "Four hours; long enough to get in her coal.  It is thirteen hundred and ten miles from Suez to Aden, at the other end of the Red Sea, and she has to take in a fresh coal supply."</p>
        <p><a href="#" class="toModalClose">Close popup!</a></p>
      </div>

      <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js"></script>
      <script src="to_modal.min.js" type="text/javascript"></script>
      <script src="script.js" type="text/javascript"></script>
    </body>

## Docs

### Settings

You can modify some options by hash array putted as toModal function argument:

    $("#popup").toModal({ showOnLoad: true, opacity: 1, overlayElementId: 'overlay' });

Available parameters:

 * opacity - overlay background opacity (default: **0.85**)
 * zIndex - z-index of modal popup (default: **100**)
 * showOnLoad - display popup on load (default: **false**)
 * openElement - class or id of element which open popup (default: **.toModalOpen**)
 * closeElement - class or id of element which close popup (default: **.toModalClose**)
 * overlayElementId - id of overlay (default: **toModalOverlay**)

### How to change overlay background?

Add custom css to overlay element

style.css

    #toModalOverlay {
      background-color: red;
    }

### How to put multiply popups on the same page

Set different elements for opening and closing popups

    $("#popup").toModal({ openElement: 'modalOneOpen', closeElement: 'modalOneClose' });
    $("#popup2").toModal({ openElement: 'modalTwoOpen', closeElement: 'modalTwoClose' });
