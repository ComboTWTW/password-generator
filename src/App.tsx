import Password from "./components/Password"
import { style } from "./style"


const App = () => (
  <div className="bg-veryDark h-screen w-full overflow-hidden flex justify-center">
    <div className={`container md:max-w-md`}>
      <Password />
    </div>
  </div>
)



export default App