<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Native Project</title>
</head>
<body>

<h1>React Native Project</h1>

<h2>Getting Started</h2>

<p>Follow the steps below to run the project locally and ensure smooth collaboration.</p>

<h3>Prerequisites</h3>

<p>Before you begin, make sure you have:</p>
<ul>
    <li><a href="https://nodejs.org/">Node.js</a> installed.</li>
    <li><a href="https://docs.expo.dev/get-started/installation/">Expo CLI</a> installed globally. You can install it via npm:</li>
    <pre><code>npm install -g expo-cli</code></pre>
    <li><a href="https://expo.dev/client">Expo Go</a> app installed on your mobile device.</li>
</ul>

<h3>Running the Project</h3>
<ol>
    <li>Clone the repository to your local machine:
        <pre><code>git clone https://github.com/your-username/your-repo.git</code></pre>
    </li>
    <li>Navigate to the project directory:
        <pre><code>cd your-repo</code></pre>
    </li>
    <li>Install the dependencies:
        <pre><code>npm install</code></pre>
    </li>
    <li>Start the Expo server:
        <pre><code>npm start</code></pre>
        <p>This will open a new tab in your default web browser showing the Expo Dev Tools. From there, you can scan the QR code using the Expo Go app on your mobile device to view the app.</p>
    </li>
</ol>

<h2>Workflow for Collaboration</h2>

<p>To ensure smooth collaboration, follow these steps before committing your changes:</p>
<ol>
    <li>Pull the latest changes from the remote repository before you start working:
        <pre><code>git pull origin main</code></pre>
        <p>This ensures you're working on the latest version of the code and helps prevent merge conflicts.</p>
    </li>
    <li>Make changes to the codebase, test your app, and make sure everything is working as expected.</li>
    <li>Run the app locally by following the steps in the "Running the Project" section above to ensure the app functions correctly before pushing your changes.</li>
    <li>Commit your changes with a meaningful commit message:
        <pre><code>git add .</code></pre>
        <pre><code>git commit -m "Your commit message"</code></pre>
    </li>
    <li>Push your changes to the remote repository:
        <pre><code>git push origin your-branch-name</code></pre>
    </li>
    <li>Before committing any code, always ensure you have the latest updates from the main branch:
        <pre><code>git pull origin main</code></pre>
        <p>This reduces the chances of merge conflicts.</p>
    </li>
</ol>

<h3>Additional Tips</h3>
<ul>
    <li>If you encounter any merge conflicts, Git will notify you. You'll need to resolve these conflicts manually, then add and commit the resolved files.</li>
    <li>Make sure to follow the naming conventions and commit message guidelines for consistency.</li>
</ul>

<h3>Troubleshooting</h3>
<ul>
    <li>If the app doesn't load or you encounter any issues, try stopping the server and restarting it with:
        <pre><code>npm start --reset-cache</code></pre>
    </li>
    <li>If Expo Go isn't scanning the QR code correctly, ensure that your mobile device and computer are on the same network.</li>
</ul>

<p>For more information, visit the <a href="https://reactnative.dev/docs/getting-started">React Native Documentation</a> or the <a href="https://docs.expo.dev/">Expo Documentation</a>.</p>

</body>
</html>
