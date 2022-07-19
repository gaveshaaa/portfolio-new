function openNav() {
  document.getElementById("mobileNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mobileNav").style.width = "0";
}

function loadBlogsFromJson(){
   var blogDOM = document.getElementById("blog");
   $.getJSON("blogs.json", function (data) {
     try {
       console.log(data.blogs);
       for (var b in data.blogs) {
         var element = document.createElement("div");
         var blogTitle = document.createElement('h1');
         var blogContent = document.createElement("p");
         var blogDate = document.createElement("h5");


        //  Title
         blogTitle.textContent = data.blogs[b].title;
         blogTitle.id = "title";
        // Content
         blogContent.textContent = data.blogs[b].content;
         blogContent.id = "content";
       // Date
         blogDate.textContent = "Posted on " + data.blogs[b].date + " by " + data.blogs[b].author;
         blogDate.id = "date";
         element.append(blogTitle, blogContent, blogDate);
         element.className = "blog-element";
         blogDOM.append(element);
       }
     } catch (error) {
       console.log(error);
     }
   });
}

loadBlogsFromJson();

$(window).scroll(function () {
  if ($(this).scrollTop() > 30) {
    $("#footer").hide();
  } else {
    $("#footer").show();
  }
});
