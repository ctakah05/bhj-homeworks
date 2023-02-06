const interests = document.querySelectorAll('.interest');

for (let i = 0;i < interests.length;i++){
    if (interests[i].querySelector('.interests_active')){
        let checkBoxChild = interests[i].querySelector('.interests_active').querySelectorAll('.interest__check')
        interests[i].querySelector('.interest__check').addEventListener('change', () => {
            if (interests[i].querySelector('.interest__check').checked){
                 for (let i=0;i < checkBoxChild.length;i++){
                    checkBoxChild[i].checked = true;
                 }
                 } else {
                    for (let i=0;i < checkBoxChild.length;i++){
                      checkBoxChild[i].checked = false;
                     }
                 }
            }
        )
        }    
    }
