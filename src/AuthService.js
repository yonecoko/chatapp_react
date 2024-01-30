import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
// ③onAuthStateChangedというメソッド(ログイン情報の切り替え)でユーザーのログイン状態を確認するコードを書く
import { auth } from "./pages/config/firebase";
import firebase from "./pages/config/firebase";

// ※ログイン情報をpropsのバケツリレーではなくスマートに子要素に渡したい
// ①contextというものを使う
// ②ログイン情報を保持するフォルダを作成

const AuthContext = React.createContext();
// ⑥createContect()メソッドを定義することで子要素に値を渡せるようになる

const AuthProvider = ({ children }) => {
  // ⑦{children}でAuthProviderで囲った中身を引数として受け取ることができる→{children}内で子要素に渡したい値を渡せる
  const [user, setUser] = useState(null);
  //   ④useStateでその情報(ログイン情報)を保持
  useEffect(() => {
    //⑤useEffectで囲うことで、ページをまたいで情報を使えるようにする
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
  // ⑧returnでauthProviderで囲ったときにどうしたいか記述→AuthContext.Providerの値を{children}内で使えるようにする
};

export { AuthContext, AuthProvider };

// Reactのログイン機能を実装するにあたって
// ログインした情報を保持しながらページを行き来するってなると
// ふつうはその行き来したいページ全部に
// propsを渡して管理しないといけないけど、
// (※こういう複数のページで作用する処理を副作用)
// 上の書き方すれば複数ページで要素を受け渡すことができる
