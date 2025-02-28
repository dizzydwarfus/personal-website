# Assetes in Public Folder

Assets are stored in remote s3 bucket.

Use aws s3 sync to make sure public data is published to the bucket for docker build in ci/cd.

```sh
aws s3 sync <s3-url> <local-public-dir>
```

or aws s3 cp

```sh
aws s3 cp <s3-url> <local-public-dir>
```
