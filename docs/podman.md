# personal-website

## 1. To build image

```bash
podman build -t personal-website:<version-tag> .
```

## 2. To create container (for the first time)

```bash
podman run -d -p 8080:80 --name personal-website personal-website:latest
```

## 3. To start container:

```bash
podman start personal-website
```

or

```bash
podman container start personal-website
```

## 4. To stop/kill container:

```bash
podman kill/stop personal-website
```

<<<<<<< HEAD
=======
## 5. To push to registry:

After building locally with step 1:

```bash
podman tag personal-website:<version-tag>
```

```bash
podman push <aws-ecr-registry-url>/personal-website:<version-tag>
```
>>>>>>> 35020b5 (added milestone timeline as component)
