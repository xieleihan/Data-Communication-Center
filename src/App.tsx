import './App.less'

function App() {
  
  const background:{ pic: string, text: string }[] = [
    {
      "pic": "../public/images/1.jpg",
      "text":"向前走,总会求得始终,不要回头"
    },
    {
      "pic": "../public/images/2.jpg",
      "text":"没有比脚更长的路,没有比人更高的山"
    },
    {
      "pic": "../public/images/3.jpg",
      "text":"致敬伟大的画家莫奈-日出印象"
    },
    {
      "pic": "../public/images/4.jpg",
      "text":"暖阳下的海风还是一样"
    },
    {
      "pic": "../public/images/5.jpg",
      "text":"致敬伟大的画家梵高-星月夜"
    }
  ]

  const index:number = Math.floor(Math.random() * background.length)

  return (
    <>
      <div className='main' style={{ background: `url(${background[index].pic})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="leftcontent">
          <span>{`${background[index].text}`}</span>
        </div>
        <div className="startpages">
          <div className="content">
            <div className="logo">
              <img src="../public/icon/favicon.png" alt="" />
              
            </div>
            <div className="function">
              <button className='btn'>登录</button>
              <button className='btn'>注册</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
