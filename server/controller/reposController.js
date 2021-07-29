const fetch = require('node-fetch');
const cutLink = require('../utils')
const Repo = require('../db/model/repo')

class ReposController {
    async get(req, res) {
        try {
            const repos = await Repo.get()
            res.status(200).json(repos)
        } catch (e) {
            console.log(e);
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const deleteRepo = await Repo.delete(id)
            res.status(200).json(deleteRepo)
        } catch (e) {
            console.log(e);
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params
            const {project_name, project_owner, link, created_at} = await Repo.findOne(id)
            const response = await fetch(`https://api.github.com/repos/${project_owner}/${project_name}`)
            const data = await response.json()
            const {name, forks_count, stargazers_count, open_issues_count} = data
            const updateRepo = await Repo.update({
                id,
                project_name: name,
                forks: forks_count,
                stars: stargazers_count,
                issues: open_issues_count,
                project_owner,
                project_url: link,
                created_at
            })
            res.status(200).json(updateRepo)
        } catch (e) {
            console.log(e);
        }
    }

    async add(req, res) {
        try {
            const {link} = req.body
            const {owner, repo} = cutLink(link)
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
            const data = await response.json()
            const {svn_url, name, forks_count, stargazers_count, open_issues_count,  created_at} = data
            const insertRepo = await Repo.post({
                project_name: name,
                forks: forks_count,
                stars: stargazers_count,
                issues: open_issues_count,
                project_owner: owner,
                project_url: svn_url,
                created_at : Date.parse(created_at)
            })
            res.status(201).json(insertRepo)

        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new ReposController()