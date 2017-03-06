'use strict';

const transition = function() {
  return (toState, fromState, done) => {
    if (fromState) {
      $(`#${fromState.name}`).addClass('hidden');
    }

    $(`#${toState.name}`).removeClass('hidden');

    done();
  };
};

module.exports = {
  transition,
};
