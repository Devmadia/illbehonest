//const { post } = require("../../controllers/api/comment-routes");

async function commentFormHandler(event) {
    event.preventDefault();
    console.log(event);
  
<<<<<<< HEAD
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    alert(window.location.toString().split('/').length - 1);
    if (comment_text) {
=======
    const comment_text2 = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id2 = document.querySelector('input[name="hideme"]').getAttribute('value');
    alert(post_id2)
  
    
    if (comment_text2) {
>>>>>>> 09441fc685ea7dfdddb0c87f1cdac27bd391b596
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            post_id: post_id2,
            comment_text: comment_text2
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
<<<<<<< HEAD
          alert("task is running");
          document.location.reload();          
=======
          alert(response.statusText);
          document.location.reload();
          console.log(response);
>>>>>>> 09441fc685ea7dfdddb0c87f1cdac27bd391b596
        } else {
          alert(response.statusText);
          console.log(response);
        }
    }
      
}

// document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
document.querySelector('.comment-submission').addEventListener('submit', commentFormHandler);