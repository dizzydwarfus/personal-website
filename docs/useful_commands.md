# Useful commands

## AWS S3 Sync

- s3 sync (all)

```sh
aws s3 --profile prod sync \
./public/ $BUCKET_URI/public/ \
--exclude ".*" --exclude "*/.*" --exclude "*/*/.*" --exclude "*/*/*/.*"
```

- s3 sync (data)

```sh
aws s3 --profile prod sync \
./public/data/ $BUCKET_URI/public/data/ \
--exclude ".*" --exclude "*/.*" --exclude "*/*/.*" --exclude "*/*/*/.*"
```

- s3 sync (images)

```sh
aws s3 --profile prod sync \
./public/images/ $BUCKET_URI/public/images/ \
--exclude ".*" --exclude "*/.*" --exclude "*/*/.*" --exclude "*/*/*/.*"
```

## AWS S3 Remove

- s3 rm (all)

```sh
aws s3 --profile prod rm --recursive $BUCKET_URI/public/
```
