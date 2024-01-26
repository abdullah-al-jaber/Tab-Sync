import "./lib/jquery.js";


$((_) => {
  let x = 1;
  setInterval(() => {
    let rn = Math.round(Math.random() * x)
    document.body.append(` ${rn} `)
    x += rn;
    sleep
  }, 5000);
});
