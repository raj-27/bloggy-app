### Run Blog App Container

```bash
docker run -d \                           # Run container in detached (background) mode
  --name blog-app \                       # Set container name
  --network blog-net \                    # Attach container to custom Docker network
  -p 3000:3000 \                          # Map host port 3000 to container port 3000
  -v "$(pwd):/app" \                      # Mount current directory to /app inside container
  my-blog-app:latest                      # Docker image name