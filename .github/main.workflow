workflow "CI/CD" {
  on = "push"
  resolves = ["VK DevOps"]
}

action "Install" {
  uses = "borales/actions-yarn@master"
  args = "install"
}

action "Build docs" {
  uses = "borales/actions-yarn@master"
  needs = ["Install"]
  args = "styleguide"
}

action "Deploy docs to GitHub Pages" {
  uses = "JamesIves/github-pages-deploy-action@master"
  needs = ["Build docs"]
  env = {
    BRANCH = "gh-pages"
    FOLDER = "styleguide"
  }
  secrets = ["ACCESS_TOKEN"]
}

action "VK DevOps" {
  uses = "alphamusic/VK-Notifications@master"
  needs = ["Deploy docs to GitHub Pages"]
  secrets = ["VK_TOKEN"]
}
