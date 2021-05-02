<template>
    <section class="header">
        <img id="logo" src="../assets/ossp_logo.png" alt="Text logo reading One Stop Story Prompts"/>
        <div>
            <h1 id="header-text">How to use this site</h1>
            <ol id="list">
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
    </section>
</template>

<style scoped>
/* general styles */
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
/* logo styles */
#logo {
  width: auto;
  height: 100%;
  max-height: 100vh;
}
/* text styles */
#header-text {
    font-size: 4rem;
}
#list {
    font-size: 2rem;
    list-style-type:decimal;
    line-height: 1.3;
}
</style>