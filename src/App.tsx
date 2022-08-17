import "./styles.css";
import {UseReducer} from './UseReducer'

export default function App() {
    /** 関数型（純粋関数） 
     * fn（決まった引数）　→ 決まった戻り値
     * 関数外の状態（データ）は参照・変更しない
     * 関数外に影響を及ぼさない
     * 引数で渡された値を変更しない（immutability　不変性）　
    */
    /** immutability */
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <UseReducer/>
    </div>
  );
}
