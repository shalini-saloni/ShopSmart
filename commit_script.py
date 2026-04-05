import os
import subprocess
import random

# Get list of all modified and untracked files
result = subprocess.run(["git", "status", "-s", "-uall"], capture_output=True, text=True)
lines = result.stdout.strip().split("\n")

files = []
for line in lines:
    if len(line) > 3:
        files.append(line[3:].strip())

templates = [
    "update {name}",
    "fix issues in {name}",
    "refactor {name} logic",
    "added {name}",
    "chore: update {name}",
    "polish {name} UI",
    "adjust styles for {name}",
    "integrate {name}",
    "minor tweaks in {name}"
]

for f in files:
    if os.path.isfile(f):
        # generate a human message
        basename = os.path.basename(f)
        msg = random.choice(templates).format(name=basename)
        
        # add and commit
        subprocess.run(["git", "add", f])
        subprocess.run(["git", "commit", "-m", msg])
        print(f"Committed {f} with '{msg}'")

print("Pushing to remote...")
subprocess.run(["git", "push"])
print("Done.")
