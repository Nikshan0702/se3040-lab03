# SE3040 Lab 03 (NodeJS + GitHub Flow) — Step-by-step (NikshanPS)

This guide follows the GitHub Flow:
1) Create a feature branch  
2) Do changes + run  
3) Commit  
4) Push branch  
5) Open Pull Request (PR)  
6) Merge to `main`  
7) Pull to local

---

## Part A — Repository setup

### A1) Create a new GitHub repository (README + Node `.gitignore`)
- GitHub → **New repository**
- ✅ Add a README
- ✅ Add `.gitignore` → **Node**
- **Create repository**

### A2) Clone to your Mac
```bash
cd ~/Desktop
git clone <YOUR_REPO_URL>
cd se3040-lab03
code .
```

### A3) Create a feature branch (required naming)
```bash
git checkout -b feature/NikshanPS/initial-setup
```

### A4) Initialize Node project (entry point: `app.js`)
```bash
npm init
```
- When prompted for **entry point**, type: `app.js`

### A5) Create `app.js`, run, commit, push
`app.js`:
```js
console.log("SE3040 Lab 03 - GitHub Flow + Node.js (NikshanPS)");
```

Run:
```bash
node app.js
```

Commit:
```bash
git add app.js package.json
git commit -m "Initialize Node project and add app.js"
```

Push:
```bash
git push -u origin feature/NikshanPS/initial-setup
```

### A6) Create PR and merge (GitHub UI clicks)
- GitHub repo → **Pull requests** → **New pull request**
- **base**: `main`  **compare**: `feature/NikshanPS/initial-setup`
- **Create pull request**
- **Merge pull request** → **Confirm merge**

### A7) Pull merged changes
```bash
git checkout main
git pull origin main
```

---

## Part B — Repeat GitHub Flow for each NodeJS example

Recommended structure:
- Put examples in `examples/`
- Run with `node examples/<file>.js`

### Repeatable template (every example)
```bash
git checkout main
git pull origin main
git checkout -b feature/NikshanPS/<feature-name>

# (edit/add files)
node examples/<file>.js

git add .
git commit -m "<message>"
git push -u origin feature/NikshanPS/<feature-name>
```

Then GitHub:
- **Pull requests** → **New pull request** → **Create pull request**
- **Merge pull request** → **Confirm merge**

Finally:
```bash
git checkout main
git pull origin main
```

---

## Part C — Collaboration (add friend + contribute)

### C1) Add friend as collaborator (GitHub UI clicks)
- GitHub repo → **Settings**
- **Collaborators** / **Collaborators and teams**
- **Add people** → enter friend’s username/email → **Invite**
- Friend must **accept** the invite

### C2) Clone friend’s repository
```bash
cd ~/Desktop
git clone <FRIEND_REPO_URL>
cd <friend-repo-folder>
code .
```

### C3) Create feature branch, make small change, push
```bash
git checkout -b feature/NikshanPS/readme-update
echo "" >> README.md
echo "Contribution by NikshanPS (SE3040 Lab 03 collaboration)" >> README.md
git add README.md
git commit -m "Update README (collaboration)"
git push -u origin feature/NikshanPS/readme-update
```

### C4) Create PR on friend repo + merge + pull
- Friend repo → **Pull requests** → **New pull request**
- base `main`, compare `feature/NikshanPS/readme-update`
- **Create pull request**
- Merge (by friend or you if permitted)

Pull latest:
```bash
git checkout main
git pull origin main
```

