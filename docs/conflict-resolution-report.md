## 1) Conflict Scenario

The merge conflict occurred in the README.md file while merging the feature/api-endpoints branch into the main branch. The branches involved in the conflict were main and feature/api-endpoints.

The conflict happened because both branches modified the same Setup Notes section of the README.md file. The main branch contained information related to authentication requirements, while the feature/api-endpoints branch added documentation about available API endpoints for testing. Since Git detected changes on the same lines from two different branches, it could not automatically merge them and stopped the process with a conflict.

## 2) What You Saw

When the merge was attempted, Git reported a content conflict in README.md. After opening the file in the nano editor, conflict markers were visible in the file. These markers included <<<<<<< HEAD, =======, and >>>>>>> feature/api-endpoints, which separated the changes from each branch.

The section above the separator represented the content from the main branch, while the section below showed the changes from the feature/api-endpoints branch. This confirmed that the conflict was caused by both branches editing the same section of the file. A screenshot was taken at this stage showing the conflict markers clearly inside nano, as required by the lab instructions.

## 3) Resolution Strategy

The conflict was resolved manually without using any automatic “accept all” options. Both sections contained important documentation, so instead of removing one, the content was combined into a single clean Setup Notes section. All conflict markers were removed, and both the authentication requirement and API endpoint information were preserved.

After editing, the file was saved and staged using git add README.md, and the merge was completed with a descriptive commit message. To verify the resolution, the commit history was checked to confirm the merge commit, and the repository status showed a clean working tree.

## 4) Prevention Methods

To prevent similar conflicts in the future, smaller pull requests should be used so fewer overlapping changes occur. Communicating before modifying shared files such as documentation can also reduce conflicts. Additionally, merging or rebasing from the main branch frequently helps keep branches up to date. Finally, avoiding editing the same lines in shared files at the same time can significantly reduce merge conflicts.
