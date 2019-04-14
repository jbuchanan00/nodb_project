let id = 1
let statistics = [
    {
        id: id++,
        date: "1/1/00",
        points: 0,
        assists: 0,
        rebounds: 0,
        blocks: 0,
        steals: 0
    },
    {
        id: id++,
        date: "1/2/2019",
        points: 20,
        assists: 12,
        rebounds: 2,
        blocks: 1,
        steals: 5
    }
]

module.exports = {
    get: (req, res) => {
        res.send(statistics)
    },
    // getById: (req, res) => {
    //     let {id} = req.params
    //     let stats = req.body
    //     stats.id = id
    //     let filteredById = statistics.filter(stats => +stats.id === +id)
        
    //     res.send(filteredById)
    // },
    create: (req, res) => {
        let newStats = req.body
        newStats.id = id++
        statistics.push(newStats)
        res.send(statistics)
    },
    updateById: (req, res) => {
        let {id} = req.params
        let newStats = req.body
        newStats.id = id
        let filteredStats = statistics.findIndex(stat => +stat.id === +id)
        statistics.splice(filteredStats, 1, newStats)
        res.send(statistics)
    },
    deleteById: (req, res) => {
        let {id} = req.params
        let index = statistics.findIndex(stat => +stat.id === +id)
        statistics.splice(index, 1)
        res.send(statistics)
    }

}