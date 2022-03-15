const sentence = (str) => {
  let delay = 1       //delay counter
  for (const char of str) {
    setTimeout(() => process.stdout.write(char), delay * 50);
    delay++;      //delay increases per char[index]
  }
  setTimeout(() => console.log('\n'), str.length* 50);        //str.length to make this input last
};

sentence('test hahahahhaahahaha hahaha')