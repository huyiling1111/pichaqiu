const string = `*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
.skin  {
  background: rgb(255, 230, 0);
}
.skin {
  position: relative;
  min-height: 100vh;
}
.nose {
  position: absolute;
  border: 10px solid black;
  border-color: black transparent transparent;
  top: 10%;
  left: 50%;
  margin-left: -10px;
  margin-top: -10px;
  z-index: 10;
}
.circle {
  width: 20px;
  height: 6px;
  background: black;
  position: absolute;
  top: -16px;
  left: -10px;
  border-radius: 6px 6px 0 0;
  z-index: 10;
}
.eye {
  border: 2px solid black;
  width: 64px;
  height: 64px;
  position: absolute;
  background: rgb(46, 46, 46);
  top: 10%;
  left: 50%;
  margin-left: -32px;
  border-radius: 50%;
}
.eye.right {
  transform: translate(120px, -55px);
}
.eye.left {
  transform: translate(-120px, -55px);
}
.eye::before {
  content: "";
  display: block;
  width: 28px;
  height: 28px;
  border: 2px solid black;
  border-radius: 50%;
  transform: translate(8px, 2px);
  background: white;
}
.mouth {
  /* outline: 1px solid black; */
  width: 140px;
  height: 150px;
  position: absolute;
  top: 10%;
  left: 50%;
  margin-left: -70px;
}

.mouth .up .lip {
  width: 80px;
  height: 40px;
  border: 3px solid black;
  border-radius: 0% 0% 0% 50%;
  border-top-color: transparent;
  border-right-color: transparent;
  transform: rotate(340deg);
  position: absolute;
  top: -5%;
  left: -7%;
  background: rgb(255, 230, 0);
  z-index: 5;
}
.mouth .up .lip.left::before {
  content: "";
  display: block;
  margin-top: -3px;
  margin-left: -5px;
  width: 5px;
  height: 20px;
  /* border: 1px solid red; */
  background: rgb(255, 230, 0);
}
.mouth .up .lip.right::before {
  content: "";
  display: block;
  margin-top: -3px;
  margin-left: 73px;
  width: 5px;
  height: 20px;
  /* border: 1px solid red; */
  background: rgb(255, 230, 0);
}

.mouth .up .lip.right {
  border: 3px solid black;
  border-radius: 0% 0% 50% 0%;
  border-top-color: transparent;
  border-left-color: transparent;
  transform: rotate(20deg);
  left: 52%;
}
.mouth .down {
  position: absolute;
  width: 140px;
  height: 150px;
  /* border: 1px solid red; */
  top: 16px;
  overflow: hidden;
}
.mouth .down .yuan1 {
  border: 2px solid black;
  position: absolute;
  top: -120%;
  left: 50%;
  margin-left: -50px;
  height: 280px;
  width: 100px;
  border-radius: 100px/260px;
  background: rgb(153, 5, 19);
  overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
  position: absolute;
  top: 0px;
  left: 50%;
  margin-left: -45px;
  margin-top: 15px;
  /* border: 2px solid black; */
  top: 68%;
  height: 100%;
  width: 90px;
  border-radius: 90px;
  background: rgb(252, 74, 98);
}
.skin .face {
  border: 2px solid black;
  position: absolute;
  left: 50%;
  top: 10%;
  margin-top: 40px;
  margin-left: -35px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgb(252, 13, 28);
}
.skin .face.left {
  transform: translateX(-160px);
}
.skin .face.right {
  transform: translateX(160px);
}`
export default string;