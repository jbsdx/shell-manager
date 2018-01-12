#!/usr/bin/env python

import argparse

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='test arguments',
        formatter_class=argparse.ArgumentDefaultsHelpFormatter)

    parser.add_argument('--test1', help='enter string')
    parser.add_argument('--test2', help='e1nter string')

    args = parser.parse_args()

    try:
        print args.test1 + args.test2
    except KeyboardInterrupt:
        pass