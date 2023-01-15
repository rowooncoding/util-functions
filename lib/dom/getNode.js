function getNode(node){
  if(typeof node != 'string'){
    throw new Error('이 함수의 인자는 문자 타입 이어야 합니다!')
  }
  return document.querySelector(node);
}

function getNodes(node){
  if(typeof node !== 'string'){
    throw new Error('이 함수의 인자는 문자 타입 이어야 합니다!')    
  }
  return document.querySelectorAll(node);
}

