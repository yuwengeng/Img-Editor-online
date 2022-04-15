document.querySelector('#imgComp').addEventListener('change', function(e) {
  const quality = document.querySelector('#qualitySelected').value;
  const file = e.target.files[0] || e.dataTransfer.files[0];

  lrz(file, {
    quality: parseFloat(quality),
    width: 800
  })
    .then(function (rst) {
      console.log('div rst',)

      const img = new Image(),
        div = document.createElement('div'),
        p = document.createElement('p'),
        sourceSize = toFixed2(file.size / 1024),
        resultSize = toFixed2(rst.fileLen / 1024),
        scale = parseInt(100 - (resultSize / sourceSize * 100));

      p.style.fontSize = 13 + 'px';
      p.innerHTML = '源文件：<span class="text-danger">' +
        sourceSize + 'KB' +
        '</span> <br />' +
        '压缩后传输大小：<span class="text-success">' +
        resultSize + 'KB (省' + scale + '%)' +
        '</span> ';

      div.className = 'col-sm-6';
      img.style.width = '100%';
      div.appendChild(img);
      div.appendChild(p);

      img.onload = function () {
        console.log('div', div)
        document.querySelector('#upload-container').appendChild(div);
      };

      img.src = rst.base64;
      return rst;
    })
    .catch(function (err) {
      console.log('err', err);
    })
    .always(function () {
      // 不管是成功失败，这里都会执行
      // console.log('first')
    });
});

function toFixed2(num) {
  return parseFloat(+num.toFixed(2));
}

/**
* 替换字符串 !{}
* @param obj
* @returns {String}
* @example
* '我是!{str}'.render({str: '测试'});
*/
String.prototype.render = function (obj) {
  var str = this, reg;

  Object.keys(obj).forEach(function (v) {
    reg = new RegExp('\\!\\{' + v + '\\}', 'g');
    str = str.replace(reg, obj[v]);
  });

  return str;
};
