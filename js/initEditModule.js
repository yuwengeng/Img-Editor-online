~(function () {

  // $('#myTab li:eq(0) a').tab('show');

  //初始化操作，主图片画布，水印图片遮罩层，水印图片画布，水印文本遮罩层，水印文本画布
  sinoImageEditModule.init({
    canvasId: 'canvas',
    imageCoverId: 'imageCover',
    imageCanvasId: 'watermarkImageCanvas',
    textCoverId: 'textCover',
    textCanvasId: 'watermarkTextCanvas',
  });

  //图片水印
  document.querySelector('#btnImgWatermark').addEventListener('click', function (e) {
    sinoImageEditModule.imageWatermark(document.getElementById('inputPicUrl').dataset.base64, document.getElementById('selectOpacity').value, document.getElementById('inputPicLeft').value, document.getElementById('inputPicTop').value,
      document.getElementById('inputImageWidth').value, document.getElementById('inputImageHeight').value,
      function (left, top) {
        document.getElementById('inputPicLeft').value = left;
        document.getElementById('inputPicTop').value = top;
      });
  });

  //文字水印
  document.querySelector('#btnTextWatermarkTest').addEventListener('click', function (e) {
    sinoImageEditModule.textWatermark(document.getElementById('selectTextOpacity').value, document.getElementById('inputText').value, document.getElementById('inputSize').value + 'px ' + document.getElementById('inputFont').value, document.getElementById('inputTextColor').value, document.getElementById('inputLeft').value, document.getElementById('inputTop').value,
      document.getElementById('inputTextWidth').value, document.getElementById('inputTextHeight').value, document.getElementById('inputTextLeft').value, document.getElementById('inputTextTop').value,
      function (left, top) {
        document.getElementById('inputLeft').value = left;
        document.getElementById('inputTop').value = top;
      });


  });

  //以图片的形式保存到服务器，后台用CORS
  // document.querySelector('#btnSaveImage').addEventListener('click', function (e) {
  //   sinoImageEditModule.saveImage('http://localhost:8055/Home/SaveImage', function (result) {
  //     if (result.State == 1)
  //       alert('保存成功,文件名：' + result.FileName);
  //     else
  //       alert('保存失败');
  //   });
  // });
})();