<template>
   <section id="header">
       <div class="container">
           <img class="logo" src="../assets/ossp_logo.png" alt="Text logo reading One Stop Story Prompts"/>
           <div class="wrapper">
               <h1 class="heading-text">How to use this site</h1>
               <ol class="list">
                   <li>Scroll down</li>
                    <li>Click "Generate"</li>
                    <li>You will randomly receive:
                        <ul>
                            <li>A genre</li>
                            <li>A starting setting</li>
                            <li>Main character details</li>
                            <li>A list of one-word prompts</li>
                        </ul>
                    </li>
                    <li>Don't like a specific result (ie: genre, age)?</li>
                        <ul>
                            <li>Click the result for a new one</li>
                        </ul>
                    <li>Don't like any of it?</li>
                        <ul>
                            <li>Click "Generate" for a new prompt</li>
                        </ul>
                    <li>Happy writing!  : )</li>
               </ol>
           </div>
       </div>
   </section> 
</template>

<style scoped>
#header {}
.container {
    padding: 0 8px;
    margin: auto;
    position: relative;
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    justify-content: space-evenly;
}
.logo {
    max-width: 95%;
    height: auto;
}
.wrapper {}
.heading-text {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 10vw;
    text-align: center;
    line-height: 1.3;
}
.list {
    font-family:Baskerville, 'Arial Narrow', Arial, sans-serif;
    font-size: 6vw;
    list-style-type:decimal;
}
</style>