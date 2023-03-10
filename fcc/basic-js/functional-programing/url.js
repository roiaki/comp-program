//  関数型プログラミングを適用して文字列を URL スラッグに変換する

// この行の下にあるコードのみを変更
function urlSlug(title) {

  let ans = title.toLowerCase().trim().split(/\s+/).join("-");
  console.log(ans);
  return ans;
}
// この行の上にあるコードのみを変更
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");