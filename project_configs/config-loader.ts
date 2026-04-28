import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

export interface EnvironmentConfig {
  account: string;
  region: string;
}

export interface ProjectConfig {
  project_name: string;
  environments: Record<string, EnvironmentConfig>;
  tags: Record<string, string>;
}

export function loadConfig(): ProjectConfig {
  const configPath = path.join(__dirname, 'environment_options.yaml');
  return yaml.load(fs.readFileSync(configPath, 'utf8')) as ProjectConfig;
}
