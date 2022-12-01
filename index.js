// code your solution here

function testFunc() {
    return "hi"
  }
  
  function superbowlWin(objArr) {
    const winYear = objArr.find( e => e.result === "W")
    if(winYear) {
      return winYear.year
    } else {
      return undefined
    }
  }