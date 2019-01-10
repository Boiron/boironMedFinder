screenShotURI()
{
  html2canvas(document.querySelector("# capture")).then(canvas => {
    this.screen = canvas.toDataURL();
    this.state = true;
  });
};
