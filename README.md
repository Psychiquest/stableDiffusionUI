# [diffused.io]

This project is a fork of the Restore Photos repository. It has been pivoted from 'restoring old photos' to 'converting text to image'.

[![Face Photo Restorer](./public/screenshot.png)](https://restorephotos.io/)

## How it works

It uses a DL model called [Stable Diffusion](https://stability.ai/blog/stable-diffusion-public-release) that can convert any text to image. This application gives you the ability to add any prompt, which will send it through this ML Model using a Next.js API route, and return an image generated on top of it.

## Running Locally

After cloning the repo, go to [Replicate](https://replicate.com/) to make an account and put your API key in a file called `.env`. If you'd also like to do rate limiting, create an account on UpStash, create a Redis database, and populate the two environment variables in `.env` as well. If you don't want to do rate limiting, you don't need to make any changes.

Make sure you are using v18 of Node.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```
