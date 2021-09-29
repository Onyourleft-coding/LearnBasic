
## particles-bg的使用
安装
```
npm install --save particles-bg
```
使用
```
import React, { Component } from 'react'

import ParticlesBg from 'particles-bg'

class Example extends Component {
  render () {
    return (
      <>
        <div>...</div>
        <ParticlesBg type="circle" bg={true} />
      </>
    )
  }
}
```
个性
```
<ParticlesBg color="#ff0000" num={200} type="circle" bg={true} />
```
可选效果
```
"color"
"ball"
"lines"
"thick"
"circle"
"cobweb"
"polygon"
"square"
"tadpole"
"fountain"
"random"
"custom"
```
