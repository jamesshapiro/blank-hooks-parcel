// Usage:

// import useKeypress from '../../hooks/use-keypress.hook'
// const handleEscape = React.useCallback(removeItems, []);
// useKeypress('Escape', handleEscape)

import React from 'react';

function useKeypress(keyCode, callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === keyCode) {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
}

export default useKeypress;