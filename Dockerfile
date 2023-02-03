FROM atools/chrome-headless:java11-node16-latest
#thease should only change when repo updates.
RUN apt-get update -y
#install chrome
RUN apt-get install -y google-chrome-stable
RUN google-chrome --version
#install firefox
RUN apt-get install -y firefox-esr
RUN firefox -v
#local files
COPY ./ ./
RUN rm -rf ./node_modules
#these depend on files above, especialy package.json
RUN npm i npm@latest
RUN npm install