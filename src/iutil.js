'use strict';

/* Image Util *****************************************************************/

/* Draws an given Image to a temporary canvas and returns the imageData as
  Array */
function getImageData(img){
  var cv = document.createElement('canvas');
  cv.width = img.width;
  cv.height = img.height;
  var ctx = cv.getContext('2d')
  ctx.drawImage(img, 0, 0, img.width, img.height);
  return ctx.getImageData(0, 0, img.width, img.height).data;
}

/* Loads some image using PIXI Texture Loader and returns the imageData */
function loadImageData(src, complete){
  if(!PIXI) throw new Error("PIXI required!");
  var tex = PIXI.Texture.fromImage(src);
  tex.baseTexture.on("loaded", (img)=>{
    var map = getImageData(img.source);
    PIXI.Texture.removeTextureFromCache(tex.id);
    tex.destroy(true);
    complete(map, img.width, img.height);
  })
}

/* 32bit rgba Array to 1bit alpha Array */
function getAlphaMap(data){
  var i = 3;
  var a = [];
  for(i;i<data.length;i+=4) a.push(data[i]?1:0)
  return a;
}

module.exports = {
  getImageData: getImageData,
  loadImageData: loadImageData,
  getAlphaMap: getAlphaMap,
}
