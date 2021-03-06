/**
 * Copyright (c) 2013 Kengo Tateishi (@tkengo)
 * Licensed under MIT license.
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Insert mode processor.
 */
var InsertModeProcessor = function() {
};

/**
 * Callback method that invoke when leave the insert mode.
 */
InsertModeProcessor.prototype.notifyLeaveMode = function() {
  $(document.activeElement).blur();

  chrome.runtime.sendMessage({ command: 'getContinuousState' }, function(status) {
    if (status) {
      new Executer('followLink --continuous').execute();
    }
  });
};
