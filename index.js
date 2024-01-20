let angka = 10;
let i = 2
do {
  console.log(i)
  i += 2
  } while(i <= angka )
  
  
const CharacterAI = require("node_characterai");
const characterAI = new CharacterAI();
var app = require("express")();

(async () => {
  // Authenticating as a guest (use `.authenticateWithToken()` to use an account)
  await characterAI.authenticateAsGuest();

  // Place your character's id here
  const characterId = "pQus24wbEGuwjRkJSWJGiYT4jA79HsrU5BMbekJB_lc";

  const chat = await characterAI.createOrContinueChat(characterId);

  // Send a message
  app.get('/', (r, q)=> q.send('oke'))
  app.get('/ai',async(res, req)=>{
  const txt = res.query.q;
  const response = await chat.sendAndAwaitResponse(txt, true);

  req.json({msg:response.text})
  })
  // Use `response.text` to use it as a string
})();
app.listen(3001)