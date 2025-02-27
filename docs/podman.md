# personal-website

### 1. To build image

```bash
podman build -t personal-website:<version-tag> .
```

### 2. To create container (for the first time)

```bash
podman run -d -p 8080:80 --name personal-website personal-website:latest
```

### 3. To start container:

```bash
podman start personal-website
```

or

```bash
podman container start personal-website
```

### 4. To stop/kill container:

```bash
podman kill/stop personal-website
```

