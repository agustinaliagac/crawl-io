# best-price-env-dev

This project requires Docker and Node.js

Step-by-step guide:

1- Clone this repo 
```
git clone git@github.com:agustinaliagac/best-price-env-dev.git
cd best-price-env-dev
```

2- Run the "clone" script to get all other relevant repos
```
bash scripts/clone.sh
```

3- Make sure you're running the Docker engine in your machine and execute the "run" script to install all dependencies and launch application with auto-reload feature
```
bash scripts/run.sh
```

After it's done, verify which Docker containers are running with
```
docker ps
```
You can verify in your browser that everything has loaded correctly by opening:
- The front end app: http://localhost:3000/
- The back end status app: http://localhost:8091/status
(The spring boot app actually runs on port 8090. Check that repo's Readme for more info)
