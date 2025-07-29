---
id: ip-url-whitelist
title: Whitelist URLs/IPs for Node
sidebar_position: 4
---


### Node

* **Chrome Driver (version > 114)**:
    1. googlechromelabs.github.io  
    2. edgedl.me.gvt1.com

* **MS Edge Driver**:
    1. msedgedriver.azureedge.net

* **Geckodriver (Firefox)**:
    1. api.github.com  
    2. github.com

* **Python modules**:
    1. pypi.org  
    2. pypi.python.org  
    3. files.pythonhosted.org

### Server

* 🔄 **Docker Hub**:  
  Based on the Docker Desktop allowlist and multiple community sources, whitelist:

  |  Domain                         |  Purpose                                                  |
  |---------------------------------|-----------------------------------------------------------|
  | `auth.docker.io`                |  Handles token-based authentication for secure access.    |
  | `registry-1.docker.io`          |  Main Docker image registry where images are pulled from. |
  | `index.docker.io`               |  Acts as a metadata index for repositories and tags.      |
  | `hub.docker.com`                |  Docker Hub's web interface; occasionally accessed during API-based pull. |
  | `production.cloudflare.docker.com` |  CDN used by Docker for delivering content efficiently. |
  | `docker-image-prod.*.cloudflarestorage.com` |  Backend storage for Docker images served via CDN. |
  | `login.docker.com`  |  Auth redirect used when Docker login is initiated from the CLI.  |
  | `cdn.auth0.com`     |  Provides assets (e.g., login scripts, styles) during the login/auth flow.  |
    

* 🏷️ **GitHub Container Registry**:  
   According to GitHub Community guidance, include these domains:

   |  Domain                    |  Purpose                                                                  |
   |----------------------------|---------------------------------------------------------------------------|
   |  `ghcr.io`                 |  Main GitHub Conatiner Registry for storing and pulling container images. |
   |  `pkg-containers.githubusercontent.com`  | Blob storage service where image layers are downloaded from. |
   |  `containers.pkg.github.com`       |  Legacy container registry domain ( used prior to `ghcr.io` ).    |
   |  `docker.pkg.github.com`      |  GitHub Packages registry for Docker images (older registry).          |
   |  `docker-proxy.pkg.github.com` |  Internal proxy used to route Docker pulls for GitHub-hosted containers. |
   |  `*.github.com`    |  Required for API authentication, repository access, and metadata queries.  |
   |  `*.githubusercontent.com`  |  Serve release assets and large files used in package management.  |
   |  `*.githubassets.com`       |  Static content such as icons and styles used in GitHub's UI/API calls.  |
   |  `*.ghcr.io`                |  Subdomains used for distributing image layers or chunks (e.g., via CDN) |
   |  `*.pkg.github.com`         |  Older GitHub Package Registry endpoints.  |
   |  `*.blob.core.windows.net`  |  Azure Blob Storage backend where GitHub stores large package files (including container layers).  |

### Final Whitelist Summary
#### Docker Hub:
```
- auth.docker.io
- registry-1.docker.io
- index.docker.io
- hub.docker.com
- production.cloudflare.docker.com
- docker-images-prod.*.cloudflarestorage.com
- cdn.auth0.com
- login.docker.com
```

#### GitHub Container Registry:
```
- ghcr.io
- *.github.com
- *.githubusercontent.com
- *.githubassets.com
- *.pkg.github.com
- *.ghcr.io
- docker.pkg.github.com
- docker-proxy.pkg.github.com
- containers.pkg.github.com
- pkg-containers.githubusercontent.com
- *.blob.core.windows.net
```

### ⚙️ Tips
- **DNS wildcards** (`*.github.com`) simplify management.
- **Azure blob endpoints**: monitor GitHub's meta API for `.blob.core.windows.net` subdomains if you are using GitHub Packages for Layers.
- **CDN domains** (`cloudflarestorage.com`, `production.cloudflare.docker.com`) may vary based on location - wildcards like `docker-images-prod.*.cloudflarestorage.com` are safer.

### Reference Link
https://chatgpt.com/s/t_687e0172477081918485f8b4b2186844
https://github.com/orgs/community/discussions/118629?utm_source=chatgpt.com#discussioncomment-9092567
https://docs.docker.com/desktop/setup/allow-list/

---


