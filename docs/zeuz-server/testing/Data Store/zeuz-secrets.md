---
id: zeuz-secrets
title: ZeuZ Secrets
---

import MetaCard from '@site/src/components/MetaCard';

**ZeuZ Secrets** is a secure secret management system that allows users to store and access sensitive data (API keys, passwords, tokens, credentials) in test automation. It uses hybrid encryption `(RSA-OAEP + AES-256-CBC)` to ensure secrets are encrypted at rest and in transit.

<MetaCard
  availableFrom="20251001"
  difficulty="🟢 Medium"
  lastUpdated="01 Oct, 2025"
  relatedTopics={["Data store", "Run tests", "Runtime parameters", "Create test cases"]}
/>

## Key Features
- **Client-side encryption**: Secrets are encrypted in the browser before being sent to the server.
- **Hybrid encryption**: Combines `RSA-2048` for key security with `AES-256` for data encryption.
- **Node-side decryption**: Only nodes with the correct private key can decrypt secrets.
- **Access control**: Fine-grained permissions by users, test cases, and action patterns.
- **Multiple key support**: Nodes can maintain multiple private keys for rotation.
- **Automatic log masking**: Secret values are automatically masked in test logs.

### Why it matters / Use Cases:
- **Eliminate hardcoded secrets**: Remove sensitive data from test case definitions and code.
- **Centralized secret management**: Store all secrets in one secure location with access controls.
- **Team collaboration**: Share secrets securly across teams without exposing values.
- **Compliance and auditing**: Track secret access with audit trails (test_id, action_details).
- **Key rotation**: Support multiple keys per node for seamless key rotation.
- **CI/CD integration**: Securely inject secrets into automated test runs without manual intervention.

## Prerequisites
- Access to ZeuZ Server with permissions for **Testing → Data Store → ZeuZ Secrets**.
- Admin access to **Admin → Teams & Projects → Team List** (for setting team public keys).
- ZeuZ node installed and running.
- Familiarity with ZeuZ variable syntax (`%|variable_name|%`).
- Understanding the structure of test cases and their action steps.

## Quick-Start
### Generate RSA Key Pair on Node
1. uv run node_cli.py -gpk.

### Add Public Key to Team
1. Navigate to **Admin → Team & Projects → Team List**.
2. Click **Edit** on the desired team.
3. Paste the public key into the **Public Key** field.
4. Click on **Submit** button.

### Create Your First Secret
1. Navigate to **Testing → Data Store → ZeuZ Secrets**.
2. Click **Create Secret**.
3. Fill in the required fields:
   - **Secret Key**: `demo_pass` (reference name).
   - **Secret Value**: `sk_live_1234567890` (actual secret).
4. Click **Create Secret**.

### Use Secret in Test Case
1. In any test step, use the secret using variable syntax:  

|  Parameter       |  Type               |  Value                      |
|------------------|---------------------|-----------------------------|
|  id              |  element parameter  |  password_id                |
|  api             |  selenium action    |  %\|secret['demo_pass']\|%  |

## Features
### Add Public Key to the Team
- On any of your ZeuZ Node machines:  
  `uv run node_cli.py -gpk`  
  Output:  

![](/img/zeuz-secrets/public-key.png)

- Copy the **Public Key**.
- Navigate to **Admin → Team & Projects → Team List → Edit the desired team → Enter the copied public key**.

![](/img/zeuz-secrets/copied-key.png)

### Add Existing Private Key to Other Node
- Run `uv run node_cli.py -spk` on your node where the private key is located.

![](/img/zeuz-secrets/private-key.png)

- Copy the content of the private key path.
- Run `uv run node_cli.py -apk "content_of_the_file"`. Don't forget to enclose the content in quotes (`"`).

![](/img/zeuz-secrets/content-key.png)

Output:

![](/img/zeuz-secrets/output-key.png)

### Create New Secret
- Navigate to **Testing → Data Store → ZeuZ Secrets**.
- Click **Create Secret**.
- Enter the **Secret Key**. This is the key which you will refer to when using it.
- Enter your **Secret Value**. This is your secret sensitive value. This value will be encrypted in the browser.
- Select the users who will be allowed to use it. (If left empty, all users will be allowed).
- Select the test cases you want to allow. (If left empty, all test cases will be allowed).
- If you want a specific action pattern to be matched, click **Add Action**. (If not specified, all types of actions will be allowed).
- Enter a readable label, then provide the row information. You can choose either a regex pattern or an exact match.
  > At least one action pattern must be matched to allow the secret to be used. All rows of an action pattern must match to be considered valid.
- Click **Create Secret**.

### Update Secret
- Navigate to **Testing → Data Store → ZeuZ Secrets**.
- Hover over a secret card. An edit icon will appear on the right side of the card. Click it to open the editing form.
- Keep the secret value field empty if you do not want to override it. The value cannot be viewed or edited directly, but it can be overriden. Permissions and keys can be edited.

### Use It in Action
- You can use it like a normal ZeuZ variable. You can use it everywhere where you can use the ZeuZ variable. The only difference is that you need to append secret like this: `%|secret["key_name"]|%`. Here is a complete example:

![](/img/zeuz-secrets/demo-pass.png)

## Secret Value Flow Diagram

![](/img/zeuz-secrets/secret-value.png)

## FAQs / Troubleshooting
### FAQs

<details>
<summary>Can I view a secret's value after creating it?</summary>

No. Secret values are encrypted on the client-side and stored in encrypted form. The server never stores or displays plaintext values. You can only override a secret by entering a new value.

</details>

<details>
<summary>What happens if I lose my private key?</summary>

You will lose access to all secrets encrypted with the corresponding public key. You must generate a new key pair, update the team's public key, and recreate all secrets.

</details>

<details>
<summary>Can multiple nodes share the same private key?</summary>

Yes. You can copy the private key file or use the import command (`-apk`) to distribute the same key across multiple nodes. However, for better security, each node should ideally have its own key.

</details>

<details>
<summary>How do I rotate keys?</summary>

Generate a new key (`-gpk`), add the new public key to your team, distribute the new private key to all nodes, keep old private keys temporarily for backward compatibility, then optionally re-encrypt old secrets.

</details>

<details>
<summary>Are secrets cached on the node?</summary>

No. Caching is currently disabled for security. Each access retrieves the encrypted secret directly from the server.

</details>

<details>
<summary>What happens if I do not specify allowed users?</summary>

All users in the team can access the secret, subject to test case and action pattern restrictions.

</details>

<details>
<summary>What happens if I do not specify allowed test cases</summary>

The secret can be used in any test case, subject to user and action pattern restrictions.

</details>

<details>
<summary>What happens if I do not specify action patterns?</summary>

The secret can be used in any type of action, subject to user and test case restrictions.

</details>

<details>
<summary>How do action pattern rows work together?</summary>

All rows within an action pattern must match for that pattern to be considered a match. If multiple action patterns exist, at least one must fully match.

</details>

<details>
<summary>Can I use regex in action patterns?</summary>

Yes. Select "regex" as the match type and provide a valid regular expression pattern.

</details>

<details>
<summary>Which encryption algorithms are used?</summary>

RSA-2048 with OAEP padding is used for key encryption, and AES-256-CBC is used for data encryption. See the "Secret Value Flow Diagram" for full details.

</details>

<details>
<summary>Why use hybrid encryption?</summary>

RSA provides strong security for key exchange but is insufficient for large data, while AES is fast for data encryption. Hybrid encryption combines the strengths of both.

</details>

<details>
<summary>Can I use secrets outside of test cases?</summary>

Yes, but `test_id` and `action_details` will not be available for the audit trail. Use the `Secret` class directly in custom Python code.

</details>

<details>
<summary>What file format are the private keys?</summary>

PEM format (`.pem` files). This is the standard RSA private key format, compatible with OpenSSL and other cryptography libraries.

</details>

### Troubleshooting
- **Access denied to secret 'xyz'**
  - **Possible Cause**: Permissions not configured, secret doesn't exist, or action pattern mismatch.
  - **Quick Fix**:  
    - Verify secret exists in **Testing → Data Store → ZeuZ Secrets**.
    - Check allowed users, test cases, and action patterns (empty = all allowed).
    - Ensure team has public key configured in **Admin → Team & Projects**.
- **No private key can decrypt the data**
  - **Possible Cause**: Key mismatch or missing private key.
  - **Quick Fix**:  
    - List current keys: `uv run node_cli.py -spk`
    - Generate new key (if needed): `uv run node_cli.py -gpk`
    - Distribute private key to all nodes.
- **Private key folder not found**
  - **Quick Fix**: Generate the first key (the folder is created automatically).  
                   `uv run node_cli.py -gpk`
- **Cannot create secret**
  - **Possible Cause**: No team public key, duplicate key name, or insufficient permissions.
  - **Quick Fix**:
    - Verify team has public key in **Admin → Team & Projects → Team List**.
    - Use unique secret key name.
    - Contact administrator for permissions.
- **Secret works in some test cases but not others**
  - **Quick Fix**:  
    - Check the list of allowed test cases in the secret settings.
    - Review the action patterns and use broader regex if necessary.
- **Secret value is visible in logs**
  - **Quick Fix**:  
    - Always use the `%|secret['key_name']|%` syntax. Do not assign its value to other variables.

## API Details
### Python API
From `Framework.Built_In_Automation.Shared_Resources.secrets` import `secret`.

#### Access Secret
`api_key = secret['my_api_key']`

### CLI Commands

| Command                          | Purpose                  |
|----------------------------------|-------------------------|
| `uv run node_cli.py -gpk`        | Generate a new private key |
| `uv run node_cli.py -apk "<key>"` | Import an existing private key |
| `uv run node_cli.py -spk`        | Show all private keys     |

### REST API

| Method | Endpoint                        | Purpose        |
|--------|---------------------------------|----------------|
| POST   |` /d/api/v1/zeuz-secrets`          | Create secret  |
| GET    | `/d/api/v1/zeuz-secrets`          | List all secrets |
| GET    | `/d/api/v1/zeuz-secrets/{key_name}` | Retrieve secret |
| PATCH  | `/d/api/v1/zeuz-secrets/{key_name}` | Update secret   |
| DELETE | `/d/api/v1/zeuz-secrets/{key_name}` | Delete secret   |

## Changelog

- Feature has been introduced [[20251001](/blog/zeuz-platform-20251001/)]

## Related Topics

- [Data Store](https://docs.zeuz.ai/docs/zeuz-server/testing/Data%20Store/data-store/)
- [Run tests](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/run-tests/)
- [Runtime parameters](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/runtime-parameters/)
- [Create test cases](https://docs.zeuz.ai/docs/zeuz-server/testing/Test%20Case/create-test-cases/)

---


