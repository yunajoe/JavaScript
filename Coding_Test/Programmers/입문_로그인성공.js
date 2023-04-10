function solution(id_pw, db) {
  let [user_id, user_pw] = id_pw;
  let answer = "";

  for (let item of db) {
    let [db_id, db_pw] = item;

    if (db_id === user_id) {
      user_pw === db_pw ? (answer = "login") : (answer = "wrong pw");
    } else {
      answer = "fail";
    }
  }
  return answer;
}
//합계: 87.5 / 100.0  테스트1번

function solution(id_pw, db) {
  let ID_CHECK = false;
  let PW_CHECK = false;
  db.map((item) => {
    // ID와 PW 둘다  같을때
    if (item[0] === id_pw[0] && item[1] === id_pw[1]) {
      ID_CHECK = true;
      PW_CHECK = true;
      return;
    }
    // ID만 같을떄
    if (item[0] === id_pw[0]) {
      ID_CHECK = true;
      item[1] === id_pw[1] ? (PW_CHECK = true) : (PW_CHECK = false);
      return;
    }
  });

  if (ID_CHECK && PW_CHECK) {
    return "login";
  } else if (ID_CHECK && PW_CHECK === false) {
    return "wrong pw";
  } else {
    return "fail";
  }
}
