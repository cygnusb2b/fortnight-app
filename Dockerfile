FROM danlynn/ember-cli:3.1.2 as ember
WORKDIR /myapp

ADD . /myapp/

RUN yarn
RUN ember build --env=production

FROM nginx:alpine
COPY --from=ember /myapp/dist /usr/share/nginx/html/app
COPY ./default.conf /etc/nginx/conf.d/app.conf
