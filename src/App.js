import React, { useState } from 'react'
import { marked } from 'marked';
import './App.css';
import { FaMaxcdn } from 'react-icons/fa';

 

const App = () => {
    const [content, setContent] = useState(
    `# Welcome to my React Markdown Previewer!

## This is a sub-heading...

###And here's some other cool stuff:

Heres some code, \`<div></div>\` between 2 backticks.


\`\`\`
// this is a multi line code:
//
function anotherExample(firstLine, lastLine){
    if(firstline == '\`\`\`' && lastLine == '\`\`\`'){
        return multiLineCode;
    }
}
\`\`\`

You can also make the text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [title](https://www.freecodecamp.org), and 
> blockquote
And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here.  | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:



`
    );

marked.setOptions({
    breaks: true
})
     
  return (
    <div className='container'>
        <div className='head1'><h3>Editor</h3></div>
        <textarea id='editor' onChange={(event) =>{
            setContent(event.target.value);
        }} value={content}></textarea>
        <div className='head2'></div>
        <div id='preview' dangerouslySetInnerHTML={{
            __html: marked(content)
        }}></div>
    </div>
  )
}

export default App