/* eslint-disable */
/** 高清方案脚本 */
(function() {
  function initREM(base, portraitSize, landscapeSize) {
    landscapeSize = landscapeSize || portraitSize;

    var maxFontSize = 100;
    var fontSize = 0;

    function setSize() {
      var orientation = window.orientation || 0;

      // 横向
      var isLandscape = orientation === 90 || orientation === -90;

      var psdSize = isLandscape ? landscapeSize : portraitSize;

      var screenWidth;
      if (window.screen && screen.height > screen.width) { // 正常设备的屏幕高宽固定, 不受横竖屏影响
        screenWidth = isLandscape ? screen.height : screen.width;
      } else {
        screenWidth = window.innerWidth;
      }

      var fs = Math.min(screenWidth / psdSize * base, maxFontSize) + 'px';

      var root = document.documentElement;

      if (fs !== fontSize) {
        fontSize = fs;

        root.style.fontSize = fs;
      }

      var cla = isLandscape ? 'landscape' : 'portrait';
      if (!root.classList.contains(cla)) {
        root.classList.remove('landscape');
        root.classList.remove('portrait');
        root.classList.add(cla);
      }
    }

    window.addEventListener('resize', setSize);
    window.addEventListener('orientationchange', setSize);

    setSize();
  }

  initREM(100, 720, 1280);
})();
