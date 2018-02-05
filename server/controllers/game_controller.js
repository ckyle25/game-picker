let games = [{id:0,title:'Rocket League',gbGameID:'3030-34407'}
            ,{id:1,title:'StarCraft II: Legacy of the Void',gbGameID:'3030-24079'}
            ,{id:2,title:'Left 4 Dead',gbGameID:'3030-20690'}
            ,{id:3,title:'Halo: Combat Evolved',gbGameID:'3030-2600'}];
// id,title,author
let id = 4;

module.exports = {
    create: (req,res) => {
      let {title,gbGameID} = req.body
      let newGame = {
        id: id,
        title: title,
        gbGameID: gbGameID
      }
      games.push(newGame)
      id++;
      res.status(200).json(games)
    },
    read: (req,res) => {
      res.status(200).json(games)
    },
    update: (req,res) => {
      let {title,gbGameID} = req.body
      let idToCheck = req.params.id
      let indexToChange = games.findIndex(game => game.id == idToCheck)
      games[indexToChange] = {
        id: Number(idToCheck),
        title: title || games[indexToChange].title,
        gbGameID: gbGameID || games[indexToChange].gbGameID
      }
      res.status(200).json(games)
    },
    delete: (req,res) => {
      let idToDelete = req.params.id
      let indexToDelete = games.findIndex(game => game.id == idToDelete)
      games.splice(indexToDelete,1)
      res.status(200).json(games)
    }

}
