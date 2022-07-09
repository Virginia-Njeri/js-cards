  const panels = document.querySelectorAll('.panel')
  panels.forEach((panel)=>{
    addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')

    })
  })

  function removeActiveClasses(){
    panel.forEach(panels=>{

        panels.classList.remove('active')

    })
  }
