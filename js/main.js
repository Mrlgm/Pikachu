! function () {
  function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id = setInterval(() => {
      n += 1
      container.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (n >= code.length) {
        window.clearInterval(id)
        fn && fn.call()
      }
    }, 20)
  }
  var code = `
  /*
   * 一起来画一只皮卡丘吧
   * 首先准备皮卡丘的皮
   */
  .preview {
    background: #FFE600;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .wrapper {
    width: 420px;
    height: 235px;
    position: relative;
  }
  /*
   * 先来画一个鼻子居中
   */
  .nose {
    position: absolute;
    width: 0;
    height: 0;
    border-radius: 9px;
    border: 11px solid transparent;
    border-top: 11px solid #000;
    right: 199px;
    top: 35px;
  }
  /*
   * 在来准备两个眼睛
   */
  .eye {
    position: absolute;
    width: 63px;
    height: 63px;
    background: #2E2E2E;
    border-radius: 50%;
    border: 3px solid #000;
  }
  /*
   * 左眼睛在左边
   */
  .eye.left {
    left: 60px;
  }
  /*
   * 右眼睛在右边
   */
  .eye.right {
    right: 60px;
  }
  /*
   * 再画两个瞳孔
   */
  .eye.left::before,
  .eye.right::before {
    content: '';
    display: block;
    border: 3px solid #000000;
    border-radius: 50%;
    background: #FFFFFF;
    height: 25px;
    width: 25px;
    margin-left: 3px;
  }
  /*
   * 准备两个红彤彤的脸颊
   */
  .face {
    position: absolute;
    width: 88px;
    height: 88px;
    background: #FF0200;
    border: 3px solid #000;
    border-radius: 50%;
    top: 110px
  }
  
  .face.right {
    right: 0;
  }
  /*
   * 来画一下上嘴唇
   */
  .upperLip {
    position: absolute;
    width: 91.06px;
    height: 28.45px;
    top: 60px;
    border: 3px solid #000;
    background: #FFE600;
  }
  /*
   * 左边的上嘴唇
   */
  .upperLip.left {
    right: 210px;
    border-bottom-left-radius: 90%;
    transform: rotate(-21deg);
    border-top: none;
    border-right: none;
  }
  /*
   * 右边的上嘴唇
   */
  .upperLip.right {
    left: 210px;
    border-bottom-right-radius: 90%;
    transform: rotate(21deg);
    border-top: none;
    border-left: none;
  }
  /*
   * 画一个下嘴唇
   */
  .lowerLipWrapper>.lowerLip {
    position: absolute;
    border: 3px solid #000;
    border-radius: 50%/50%;
    bottom: 0;
    width: 180px;
    height: 808px;
    background: #9B010B;
    overflow: hidden;
  }
  /*
   * 来个舌头
   */
  .lowerLipWrapper>.lowerLip>.tongue {
    height: 126px;
    width: 130px;
    background: #FF485E;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }
  /*
   * 这只皮卡丘就算画完啦！！！
   */`
  writeCode('', code)
}.call()