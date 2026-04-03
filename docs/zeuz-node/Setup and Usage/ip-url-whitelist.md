---
id: ip-url-whitelist
title: Whitelist URLs/IPs for Node
sidebar_position: 4
---


## Node

Domain whitelist for organizations running ZeuZ Node behind a firewall or proxy. Covers all
external network dependencies: package managers, browser downloads, driver binaries, cloud
services, and runtime APIs.

### Python Packages (uv / pip / PyPI)

| Domain | Purpose |
|--------|---------|
| `pypi.org` | Package index |
| `pypi.python.org` | Legacy package index |
| `files.pythonhosted.org` | Package file downloads |
| `python.org` | Python installer downloads |
| `astral.sh` | `uv` package manager website |

The `uv` binary itself is downloaded from GitHub releases (`github.com/astral-sh/uv`).

### Node.js / npm

| Domain | Purpose |
|--------|---------|
| `nodejs.org` | Node.js binary downloads (used by Appium installer) |
| `registry.npmjs.org` | npm package registry (Appium server, AI Recorder deps) |

### Go Modules (node_runner)

| Domain | Purpose |
|--------|---------|
| `proxy.golang.org` | Go module proxy (default) |
| `sum.golang.org` | Go checksum database |

### GitHub / Source Hosting

| Domain | Purpose |
|--------|---------|
| `github.com` | Repo cloning, release downloads, `uv` binary, PyGetWindow fork, WebDriverAgent |
| `api.github.com` | GitHub API (release lookups) |
| `raw.githubusercontent.com` | Raw file downloads (inspector.exe for Windows) |
| `codeload.github.com` | Archive downloads (PyGetWindow zip) |
| `objects.githubusercontent.com` | Release asset downloads |
| `github-releases.githubusercontent.com` | Release binary downloads (EasyOCR models, uv, etc.) |

### Playwright Browsers

| Domain | Purpose |
|--------|---------|
| `playwright.azureedge.net` | Playwright browser binaries (Chromium, Firefox, WebKit) |

### Selenium / WebDriver Manager

| Domain | Purpose |
|--------|---------|
| `googlechromelabs.github.io` | Chrome for Testing version metadata |
| `storage.googleapis.com` | ChromeDriver binary downloads |
| `edgedl.me.gvt1.com` | ChromeDriver alternative CDN |
| `msedgedriver.azureedge.net` | Edge WebDriver downloads |

GeckoDriver (Firefox) is downloaded from GitHub releases (covered above).

### Browser Installers

| Domain | Purpose |
|--------|---------|
| `go.microsoft.com` | Edge browser installer redirects |
| `download.mozilla.org` | Firefox installer downloads |

:::note
`go.microsoft.com` redirects through Microsoft CDN domains that vary by region. Monitor
proxy logs during first Edge installation to capture the exact CDN domains needed.
:::

### Mobile Testing (Appium / Android / iOS)

| Domain | Purpose |
|--------|---------|
| `dl.google.com` | Android SDK command-line tools |
| `download.oracle.com` | Oracle JDK 21 downloads |
| `api.adoptium.net` | Eclipse Temurin JDK API (alternative JDK source) |
| `github.com` | WebDriverAgent cloning for iOS (`appium/WebDriverAgent`) |

Appium server is installed via npm — covered by `registry.npmjs.org` above.

### Google Cloud Platform

Required by `google-cloud-bigquery`, `google-cloud-bigquery-storage`, and
`google-cloud-storage` dependencies.

| Domain | Purpose |
|--------|---------|
| `storage.googleapis.com` | Cloud Storage API + general Google CDN |
| `bigquery.googleapis.com` | BigQuery API |
| `bigquerystorage.googleapis.com` | BigQuery Storage API |
| `oauth2.googleapis.com` | OAuth 2.0 token endpoint |
| `accounts.google.com` | Google account authentication |
| `www.googleapis.com` | Google API discovery + legacy endpoints |

### Snowflake

Required by `snowflake-connector-python`.

| Domain | Purpose |
|--------|---------|
| `*.snowflakecomputing.com` | Snowflake account endpoints |
| `ocsp.snowflakecomputing.com` | Snowflake OCSP certificate validation |

:::tip
Replace `*` with your organization's specific Snowflake account subdomain
(e.g., `myorg.snowflakecomputing.com`) for tighter control.
:::

### OCR Models (EasyOCR / PyTorch)

Downloaded on first use and cached locally.

| Domain | Purpose |
|--------|---------|
| `github.com` | EasyOCR model releases (`JaidedAI/EasyOCR`) |
| `github-releases.githubusercontent.com` | Model zip file downloads |
| `download.pytorch.org` | PyTorch pre-trained ResNet weights |

### Optional — Test Runtime Services

These are only needed if your test cases use these specific features.

**Temporary email services:**

| Domain | Purpose |
|--------|---------|
| `www.1secmail.com` | 1secmail temporary email API |
| `www.developermail.com` | DeveloperMail temporary email API |

**Chrome extension downloads:**

| Domain | Purpose |
|--------|---------|
| `clients2.google.com` | Chrome Web Store CRX download API |
| `www.crx4chrome.com` | Alternative CRX download source |

**Security testing (Arachni):**

| Domain | Purpose |
|--------|---------|
| `api.github.com` | Arachni latest release lookup |
| `github.com` | Arachni binary download |

### mitmproxy

| Domain | Purpose |
|--------|---------|
| `snapshots.mitmproxy.org` | mitmproxy binary/snapshot downloads |

### ZeuZ Server

Your organization's ZeuZ Server instance — the node polls it for test cases and uploads results.

| Domain | Purpose |
|--------|---------|
| `*.zeuz.ai` | ZeuZ Server (replace with your org's server domain) |

### TLS / Certificate Validation

OCSP and CRL endpoints required for TLS certificate chain validation.

| Domain | Purpose |
|--------|---------|
| `ocsp.digicert.com` | DigiCert OCSP responder |
| `ocsp.sectigo.com` | Sectigo OCSP responder |
| `crl.sectigo.com` | Sectigo CRL distribution |
| `ocsp.pki.goog` | Google Trust Services OCSP |
| `crl.pki.goog` | Google Trust Services CRL |
| `ocsp.r2m01.amazontrust.com` | Amazon Trust OCSP (PyPI, npm) |

### Node — Consolidated List

Flat list for firewall/proxy configuration. All entries are HTTPS (port 443).

```
# ── Package Managers ──────────────────────────────────────────
pypi.org
pypi.python.org
files.pythonhosted.org
python.org
astral.sh
nodejs.org
registry.npmjs.org

# ── Go Module Proxy ──────────────────────────────────────────
proxy.golang.org
sum.golang.org

# ── GitHub ────────────────────────────────────────────────────
github.com
api.github.com
raw.githubusercontent.com
codeload.github.com
objects.githubusercontent.com
github-releases.githubusercontent.com

# ── Playwright Browsers ──────────────────────────────────────
playwright.azureedge.net

# ── Selenium / WebDrivers ────────────────────────────────────
googlechromelabs.github.io
storage.googleapis.com
edgedl.me.gvt1.com
msedgedriver.azureedge.net

# ── Browser Installers ───────────────────────────────────────
go.microsoft.com
download.mozilla.org

# ── Android SDK / JDK ────────────────────────────────────────
dl.google.com
download.oracle.com
api.adoptium.net

# ── Google Cloud Platform ─────────────────────────────────────
bigquery.googleapis.com
bigquerystorage.googleapis.com
oauth2.googleapis.com
accounts.google.com
www.googleapis.com

# ── Snowflake ─────────────────────────────────────────────────
*.snowflakecomputing.com

# ── OCR Models ────────────────────────────────────────────────
download.pytorch.org

# ── Optional: Temp Email (test runtime) ───────────────────────
www.1secmail.com
www.developermail.com

# ── Optional: Chrome Extensions (test runtime) ────────────────
clients2.google.com
www.crx4chrome.com

# ── mitmproxy ─────────────────────────────────────────────────
snapshots.mitmproxy.org

# ── ZeuZ Server (replace with your domain) ────────────────────
*.zeuz.ai

# ── TLS / OCSP / CRL ─────────────────────────────────────────
ocsp.digicert.com
ocsp.sectigo.com
crl.sectigo.com
ocsp.pki.goog
crl.pki.goog
ocsp.r2m01.amazontrust.com
```

---

## Server

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


